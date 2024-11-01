# 🕵️‍♀️ DiscordMemberScraper 🚀

<p align="center">
  A very simple selfbot script to scrape members from a discord server.
</p>

## 🌟 Features

- **🔍 Comprehensive Member Lookup**: Fetch detailed member information from Discord servers
- **📊 Dual Fetch Methods**: 
  - Standard Discord member fetch
  - Custom member safety fetch
- **💾 CSV Export**: Seamless data export for further analysis
- **⏱️ Performance Tracking**: Elapsed time logging for fetch operations

## 🛠️ Prerequisites

- **Languages & Runtimes**:
  - Node.js (v14+ recommended)
  - npm (Node Package Manager)

- **Dependencies**:
  - `discord.js-selfbot-v13`
  - `csv-writer`
  - `fs` (built-in)

## 🚀 Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Tentoxa/DiscordMemberScraper.git
   cd DiscordMemberScraper
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure `config.json`**:
   ```json
   {
     "token": "YOUR_DISCORD_TOKEN",
     "guild_id": "TARGET_SERVER_ID"
   }
   ```

## 🔧 Usage

1. **Run the Script**:
   ```bash
   node index.js
   ```

## 📋 Data Schema

The generated CSV will include:

| Column                    | Description                            |
|---------------------------|----------------------------------------|
| 🆔 Server ID              | Unique identifier of the Discord server |
| 📛 Server Name            | Name of the Discord server             |
| 👤 Username               | Discord username                       |
| 📅 Date Joined Server     | UTC date of server join                |
| ⏰ Timestamp Joined Server| Numeric timestamp of server join       |
| 🎂 Date Joined Discord    | UTC date of Discord account creation   |
| 🕰️ Timestamp Joined Discord| Numeric timestamp of account creation  |

## ⚠️ Legal & Ethical Considerations

- Use responsibly and in compliance with Discord's Terms of Service
- Respect user privacy and data protection regulations
- This tool is for research and analytical purposes only

## 📜 License

MIT License - See `LICENSE` file for details

## 🛡️ Disclaimer

This is a self-bot utility. Use at your own risk. Potential violations of Discord's ToS may result in account suspension.