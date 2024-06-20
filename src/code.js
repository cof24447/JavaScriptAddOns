
import addOnSandboxSdk from "add-on-sdk-document-sandbox";
import { editor, colorUtils, constants } from "express-document-sdk";
const { runtime } = addOnSandboxSdk.instance;
async function start() {
    const sandboxApi = {
        addPage: function (size = { width: 400, height: 600 }) {
            editor.documentRoot.pages.addPage(size);
        },
        createText: async function(Name,replaceText, size = {}) {
            const insertionParent = editor.context.insertionParent;
            let childrens =  insertionParent.children.toArray();
            await editor.queueAsyncEdit(() => {
                childrens.map((item)=>{
                    if(item.type === "Group"){
                        let data = item.children.toArray();
                        data.map((item)=>{
                            if(item.type === "Text" && item.text === replaceText){
                                console.log(item.textAlignment);
                                item.text = Name
                                item.textAlignment = 3
                            }
                        })
                        
                    }
                })
            });
           
            return "**** Image created successfully ****"
        }
    }
    runtime.exposeApi(sandboxApi);
}

start();
