import fs from 'fs';
import csvParse from 'csv-parse';

import Transaction from '../models/Transaction';

class ImportTransactionsService {
  async execute(filePath: string): Promise<Transaction[]> {
    const contactsReadStream = fs.createReadStream(filePath);

    const parsers = csvParse({
      delimiter: '', // VÍDEO PAROU EM 01:16:00
    });
  }
}

export default ImportTransactionsService;
