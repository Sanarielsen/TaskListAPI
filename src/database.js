import fs from 'node:fs/promises';

//const databasePath = new URL('../db.json', import.meta.url);

export class Database {

  database = {}

  constructor() {
    console.log("Database->constructor()");
  }

  #persist() {
    console.log("Database->#persist()");
    //fs.writeFile(databasePath, JSON.stringify(this.database))
  }
}