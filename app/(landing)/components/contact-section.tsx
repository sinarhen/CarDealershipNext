import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";

export async function ContactSection() {
    return (
        <section
            className="bg-black motion-opacity-in-0 motion-delay-1500 text-white flex flex-col items-center py-24 w-full h-full">
            <h1 className="text-2xl">Contact Us</h1>
            <form className="w-[400px]">
                <Label>Email</Label>
                <Input id="email-contact" name="email"/>

                <Label>Description</Label>
                <Textarea/>

                <Button type="submit" className="w-full mt-3">
                    Send
                </Button>
            </form>
        </section>
    );
}