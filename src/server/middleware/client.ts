import cheerio from "cheerio";
import fs from "fs";
import path from "path";
import { Helmet, HelmetData } from "react-helmet";

const templatePath: string = path.join(process.cwd(), "dist", "client", "index.html");
const HTML_TEMPLATE: string = fs.readFileSync(templatePath).toString();

export default function generateHtml(markup: string): string {
  const helmet: HelmetData = Helmet.renderStatic();
  const $template: CheerioStatic = cheerio.load(HTML_TEMPLATE);
  $template("head").append(
    helmet.title.toString() + helmet.meta.toString() + helmet.link.toString()
  );
  $template("#root").html(markup);
  return $template.html();
}
