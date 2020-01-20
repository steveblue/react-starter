import fs from 'fs';
import path from 'path';
import cheerio from 'cheerio';
import { Helmet } from 'react-helmet';

const templatePath = path.join(process.cwd(), 'dist', 'client', 'index.html');
const HTML_TEMPLATE = fs.readFileSync(templatePath).toString();

export default function generateHtml(markup) {

  const helmet = Helmet.renderStatic();
  const $template = cheerio.load(HTML_TEMPLATE);
  $template('head').append(helmet.title.toString() + helmet.meta.toString() + helmet.link.toString());
  $template('#root').html(markup);

  return $template.html();
}