import { createColors } from 'colorette';

// Sapphire plugins
import '@sapphire/plugin-logger/register';

// Enable discord-player smooth volume
import 'discord-player/smoothVolume';

// Enable colorette colors
createColors({ useColor: true });
