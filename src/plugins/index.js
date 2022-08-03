import {
    Swipe,
    SwipeItem,
    Button,
    Popup
} from "vant";
let plugins = [
    Swipe, SwipeItem, Button,Popup
]
export default function getVent(app) {
    plugins.forEach((item) => {
        return app.use(item)
    })
}