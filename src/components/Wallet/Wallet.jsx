import {Grid, IconButton, makeStyles} from "@material-ui/core";
import {AccountBalanceWalletOutlined} from "@material-ui/icons";
import React, {useEffect, useState} from "react";
import WalletConnectModal from "./WalletConnectModal";
import {useCabbageWallet} from "@poolparty/cabbage-wallet";
import ConnectedWalletModal from "./ConnectedWalletModal";
import {Container, Row, Button, NavLink} from "reactstrap";

require('dotenv').config()

const useStyles = makeStyles(theme => ({
    hoverButton: {
        "&:hover": {
            backgroundColor: "transparent",
            color: "#f33c00"
        }
    },
    connectButton: {
        color: "white"
    }
}))

const Wallet = () => {
    const {connected, connect, disconnect} = useCabbageWallet({
        walletConnectOpts: {infuraId: process.env.INFURA_ID}
    })

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const classes = useStyles()

    const toggle = () => setOpen(!open)

    useEffect(() => {
        const attemptConnect = async () => {
            try {
                await connect()
            } catch (e) {
            }
        }

        if (!connected) {
            attemptConnect()
        }
    }, [])

    return (
        <>
            {
                connected ?
                    <ConnectedWallet disconnect={disconnect}/>
                    :
                    <Button className="btn-icon rounded connectWallet" onClick={toggle} type="button" >
                        <span className="btn-inner--icon">
                          <i className="fas fa-wallet"></i>
                        </span>
                        <span className="btn-inner--text">Connect Wallet</span>
                    </Button>
            }

            <WalletConnectModal loading={loading} setLoading={setLoading} open={open} toggle={toggle}
                                connect={connect}/>
        </>
    )
}

/* TODO: Make the wallet clickable and show a menu. */
const ConnectedWallet = props => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const toggle = () => setOpen(!open)

    return (
        <>
            <NavLink
                className="nav-link-icon"
                color="warning" type="button" onClick={toggle} style={{color: 'yellow'}}

            >
                <i className="fas fa-wallet"></i>
            </NavLink>
            <ConnectedWalletModal open={open} toggle={toggle} disconnect={props.disconnect}/>
        </>
    )
}

export default Wallet