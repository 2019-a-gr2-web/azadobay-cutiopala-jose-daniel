import { Module } from "@nestjs/common";
import { ChatGateway } from "./chat.gateway";

@Module({
    providers:[
        ChatGateway
    ]
})
export class ChatModule{}


//BD para Sesiones  puede ser Redis, Mongo.