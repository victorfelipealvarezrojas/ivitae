import { AdapterMarkdown } from "../../../infrastructure/adapters/Markdown";
import documentationMd from "../../../document/sagas.md.ts";

import "./distribuidos.css"


export const Distribuidos = () => {
    return (
        <div style={{
            background: "#fff"
        }}>
            <div className="markdown-container">
                <AdapterMarkdown text={documentationMd} />
            </div>
        </div>
    )
}
