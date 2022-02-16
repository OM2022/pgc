import { Button, Grid, Paper, Typography } from "@material-ui/core"
import ModalTemplate from "../Modal/ModalTemplate"
import { useStyles } from "./WalletConnectModal"
import { useBalance } from '@poolparty/cabbage-wallet'
import React, { useEffect, useState } from "react"

const ConnectedWalletModal = props => {
    const classes = useStyles()
    const { getBalance } = useBalance()
    const [balance, setBalance] = useState("")

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                setBalance(await getBalance())
            } catch (e) {
                console.log(e)
            }
        }

        if (props.open) {
            fetchBalance()
        }
    }, [props.open])

    return (
        <ModalTemplate open={props.open} toggle={props.toggle}>
            <Paper className={classes.root} square>
                <Grid container justifyContent="center" alignItems="center" direction="column" spacing={2}>
                    <Grid item>
                        <Typography variant="h6">Balance: {!balance ? "Loading..." : balance}</Typography>
                    </Grid>

                    <Grid item>
                        <Button variant="contained" color="primary" onClick={props.disconnect}>Disconnect</Button>
                    </Grid>
                </Grid>
            </Paper>
        </ModalTemplate>
    )
}

export default ConnectedWalletModal