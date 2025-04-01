import Button from "./Button";
import Card from "./Card_Comp";
import Image from "./Image";
import Text from "./Text_Comp";
function ComponentRenderer({component}){
    switch(component){
        case "Button":
            return <Button editable={true}/>
        case 'Text':
            return <Text editable={true}/>
        case "Card":
            return <Card editable={true}/>
        case "Image":
            return <Image editable={true}/>      
        default:
            return null;          
    }
}