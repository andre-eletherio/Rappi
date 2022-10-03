import habbibs from '../styles/img/habbibs.png'
import mc from '../styles/img/mc.png'
import out from '../styles/img/out.png'

export function getImg(name, url) {
    switch(name){
        case "Habibs":
            return {"img": habbibs, "color": "#ef0d18"}
        case "Tadashii":
            return {"img": url, "color": "#151515"}
        case "McDonalds":
            return {"img": mc, "color": "#db0007"}
        case "Outback Steakhouse":
            return {"img": out, "color": "#6f0d0b"}
        case "Boteco de Portal":
            return {"img": url, "color": "#000"}
        case "Chun-Li":
            return {"img": url, "color": "#727378"}
        default:
            return {"img": url}
    }
}
