import { appendFile } from 'fs';

appendFile('text.txt', 'data to append', (err) => {
  if (err) console.log("error ======> ",err)
});