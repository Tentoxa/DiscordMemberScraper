const { Client } = require('discord.js-selfbot-v13');
const fs = require('fs');
const csv = require('csv-writer').createObjectCsvWriter;

const client = new Client();

const config = require('./config.json');

const GUILD_ID = config.guild_id;
const TOKEN = config.token;

// Fetch method 1 will use default fetch() method
// Fetch method 2 will use custom fetchByMemberSafety() method
const FETCH_METHOD = 1;

function createOutputFile(guild) {
    const dir = './results';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    const file = `${dir}/${guild.name}.csv`;
    return file;
};

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);

    const guild = client.guilds.cache.get(GUILD_ID);

    if (!guild) {
        console.log(`Guild with ID ${GUILD_ID} not found.`);
        return;
    }

    const csvWriter = csv({
        path: createOutputFile(guild),
        header: [
            { id: 'server_id', title: 'Server ID' },
            { id: 'server_name', title: 'Server Name' },
            { id: 'username', title: 'Username' },
            { id: 'date_joined_server', title: 'Date Joined Server' },
            { id: 'timestamp_joined_server', title: 'Timestamp Joined Server' },
            { id: 'date_joined_discord', title: 'Date Joined Discord' },
            { id: 'timestamp_joined_discord', title: 'Timestamp Joined Discord' }
        ]
    });

    try {
        console.log('Fetching members');
        const start = Date.now();
        var members = null;
        if(FETCH_METHOD === 1) {
            members = await guild.members.fetch();
        }else if(FETCH_METHOD === 2) {
            members = await guild.members.fetchByMemberSafety();
        }
        const end = Date.now();

        const elapsed = new Date(end - start).toISOString().substr(11, 8);
        console.log(`Fetched ${members.size} members in ${elapsed}`);

        const memberData = [];

        console.log("Processing members");

        for (const [id, member] of members) {
            const joinedServerDate = member.joinedAt;
            const joinedDiscordDate = new Date(member.user.createdTimestamp);

            memberData.push({
                server_id: guild.id,
                server_name: guild.name,
                username: member.user.username,
                date_joined_server: joinedServerDate.toUTCString(),
                timestamp_joined_server: member.joinedTimestamp,
                date_joined_discord: joinedDiscordDate.toUTCString(),
                timestamp_joined_discord: member.user.createdTimestamp
            });
        }

        memberData.sort((a, b) => a.timestamp_joined_server - b.timestamp_joined_server);

        await csvWriter.writeRecords(memberData);
        console.log('CSV file has been written successfully!');

    } catch (error) {
        console.error('Error fetching members or writing CSV:', error);
    }
});

client.login(TOKEN);