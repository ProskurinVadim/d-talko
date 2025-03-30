import {FC} from "react";
import Logo from "../../common/Logo";
import { Heading, Text } from "../../common";
import Container from "../../shared/Container";
import { Telegram, Viber } from "../../common/Icon";

const Footer:FC<object> = () => {

    return (
        <footer className="lg:mt-[100px] lg:mb-8">
            <Container>
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="pb-12">
                        <Heading tlwVar={{leading:"large"}}>Напишіть нам:</Heading>
                        <span className="flex justify-center mt-4 md:justify-start">
                            <Viber />
                            <Telegram />
                        </span>
                    </div>
                    </div>
                <div className="pt-8 bordeer-main_inverse_light border-solid border-t flex justify-center flex-col md:justify-between md:flex-row">
                    <Text className="text-sm">Terms of Service & Privacy Policy</Text>
                    <Text className="text-sm">© 2024 MaksymTalko. Всі права захищені</Text>
                    <Text className="text-sm">Made by Team Valentyna Voitsitska</Text>
                </div>
            </Container>
        </footer>
    )
}

export default Footer