import { Button, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Input from "../../utility/Input";
export default function ContactFrom() {
    const [data, setData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: '',

    });
    const config = {
        SecureToken: "5361dfc4-a610-4ebb-a28b-1ba24d687a6a",
        To: 'abdulkadirshohan@gmail.com',
        From: data.email,
        Subject: data.subject,
        Body: data.message,
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // const formData = new FormData();
        // formData.append('name', data.name);
        // formData.append('email', data.email);
        // formData.append('subject', data.subject);
        // formData.append('message', data.message);
        window.Email.send(config).then(
            message => alert(message)
        );


    }
    return (
        <Stack spacing={2}
            py={8}
        >

            {/* <a href="mailto:email@example.com?subject='Hello from Abstract!'&body='Just popped in to say hello'">Click to Send an Email</a> */}
            <form
                onSubmit={handleSubmit}
            >
                <Grid container spacing={1} >

                    <Grid item xs={12} md={4}>
                        <Input
                            label="Name"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Input
                            label="Subject"
                            name="subject"
                            value={data.subject}
                            onChange={(e) => setData({ ...data, subject: e.target.value })}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Input
                            label="Email"
                            name="email"
                            value={data.email}
                            type="email"
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <Input
                            label="Message"
                            name="message"
                            value={data.message}
                            onChange={(e) => setData({ ...data, message: e.target.value })}
                            fullWidth
                            multiline
                            rows={4}
                            required
                            inputProps={{
                                className: 'a-class-with-black-text-set-as-important'
                            }}
                        />

                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            variant="outlined"
                            color="primary"
                            type="submit"
                            sx={{
                                color: "#fff",
                                p: 1,
                                border: "1px solid #C778DD",
                                "&:hover": {
                                    backgroundColor: "#C770DB1A",
                                    opactiy: 0.8,
                                    borderColor: "#C778DD",
                                    cursor: "pointer",
                                },
                                fontWeight: "600",
                                textTransform: "none",
                                fontFamily: 'FiraCode',
                                fontSize: 16,

                            }}
                        >
                            Submit
                        </Button>

                    </Grid>
                </Grid>
            </form>
        </Stack >
    )
}
