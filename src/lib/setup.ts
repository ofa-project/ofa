import { createColors } from 'colorette';

// Sapphire plugins
import '@sapphire/plugin-i18next/register';
import '@sapphire/plugin-logger/register';
import '@sapphire/plugin-subcommands';

// Enable discord-player smooth volume
import 'discord-player/smoothVolume';

// Enable colorette colors
createColors({ useColor: true });
