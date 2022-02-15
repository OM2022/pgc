import { Grid, Link, makeStyles, Paper, Typography, CircularProgress } from "@material-ui/core"
import { Container, Row, Button } from "reactstrap";

import { ConnectorResponseCode, WalletSelection } from "@poolparty/cabbage-wallet"
import React, { useState } from "react"
import ModalTemplate from "../Modal/ModalTemplate"

export const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            padding: theme.spacing(2),
            maxWidth: 450

            // [theme.breakpoints.down("xs")]: {
            //     width: 250
            // }
        }
    },
    walletLogo: {
        width: "20%",
        height: "20%"
    }
}))

const WalletConnectModal = props => {
    const classes = useStyles()
    const [responseCode, setResponseCode] = useState(0)

    const toggle = () => {
        if (props.loading) {
            return
        }
        props.toggle()
        setResponseCode(0)
    }

    const connectWallet = async wallet => {
        try {
            props.setLoading(true)
            const responseCode = await props.connect(wallet)
            setResponseCode(responseCode)

            if (responseCode === ConnectorResponseCode.Success) {
                toggle()
            }
        } catch (e) {
            setResponseCode(e)
        }
        finally {
            props.setLoading(false)
        }
    }

    return (
        <ModalTemplate open={props.open} toggle={toggle}>
            <Paper className={classes.root} square>
                {
                    props.loading ?
                        <CircularProgress />
                    :
                    responseCode === ConnectorResponseCode.NoProvider ?
                        <NoProvider />
                        : responseCode === ConnectorResponseCode.Pending ?
                            <PendingRequest />
                            :
                            <WalletSelection connect={connectWallet} />
                }
            </Paper>
        </ModalTemplate>
    )
}

const NoProvider = () => (
    <Grid container justifyContent="center" alignItems="center" direction="column" spacing={2}>
        <Grid item>
            <Typography>We did not detect MetaMask on your browser. Please click the button below to install it.</Typography>
        </Grid>
        <Grid item>
            <Button href="https://metamask.io/" target="_blank" variant="contained" color="primary" type="button">
                Install MetaMask
            </Button>
        </Grid>
    </Grid>
)

const PendingRequest = () => (
    <Grid container justifyContent="center" alignItems="center" direction="column" spacing={2}>
        <Grid item>
            <Typography>A wallet connection request is already pending. Please check your wallet for incoming requests.</Typography>
        </Grid>
    </Grid>
)

export default WalletConnectModal