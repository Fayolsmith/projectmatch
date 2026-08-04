import fs from 'fs';
import path from 'path';
import os from 'os';
import { Config } from './types.js';

const CONFIG_DIR = path.join(os.homedir(), '.projectmatch');
const CONFIG_FILE = path.join(CONFIG_DIR, 'config.json');

export function loadConfig(): Config {
  try {
    if (!fs.existsSync(CONFIG_FILE)) {
      return {};
    }
    const raw = fs.readFileSync(CONFIG_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    return {};
  }
}

export function saveConfig(config: Config): void {
  try {
    if (!fs.existsSync(CONFIG_DIR)) {
      fs.mkdirSync(CONFIG_DIR, { recursive: true });
    }
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2), 'utf8');
  } catch (err: any) {
    throw new Error(`Failed to save config to ${CONFIG_FILE}: ${err.message}`);
  }
}

export function getConfigPath(): string {
  return CONFIG_FILE;
}
