import {FC} from "react";
import Logo from "../../common/Logo";
import { Heading, Text } from "../../common";
import Container from "../../shared/Container";
import { Telegram, Viber } from "../../common/Icon";

const Footer:FC<object> = () => {

    return (
        <footer className="hidden md:block md:mt-[60px] md:mb-8 lg:mt-[100px] lg:mb-8">
            <Container>
                <div className="flex justify-between items-center pb-12">
                    <Logo />
                    <div>
                        <Heading tlwVar={{leading:"large"}}>Напишіть нам:</Heading>
                        <span className="flex justify-center mt-4 md:justify-start">
                            <Viber />
                            <Telegram />
                        </span>
                    </div>
                    </div>
                <div className="pt-8 bordeer-main_inverse_light border-solid border-t flex items-center gap-4 flex-col lg:justify-between lg:flex-row">
                    <Text className="text-sm opacity-50">Terms of Service & Privacy Policy</Text>
                    <Text className="text-sm opacity-50">© 2024 MaksymTalko. Всі права захищені</Text>
                    <Text className="text-sm opacity-50">Made by Team Valentyna Voitsitska</Text>
                </div>
            </Container>
        </footer>
    )
}

export default Footer