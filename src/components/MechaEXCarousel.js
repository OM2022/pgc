import React, {useEffect, useState} from "react";

// reactstrap components
import {Button, Container, Row, Col, UncontrolledCarousel, Input, Alert, Toast, ToastBody} from "reactstrap";
import {connectedAtom, networkAtom, useBalance, useContract, walletProviderAtom} from "@poolparty/cabbage-wallet";
import {useAtom} from "jotai";
import {ethers} from "ethers";
import mechagnomes from "../contracts/MechagnomesNFT.json";

import gear30x30 from "../assets/img/gear30x30.png";

// Core Components
const items = [
    {
        src: require("assets/img/assembly1.png"),
        altText: "Assembly",
        caption: "",
        key: "key-1",
    },
    {
        src: require("assets/img/assembly2.png"),
        altText: "Assembly",
        caption: "",
        key: "key-2",
    },
    {
        src: require("assets/img/assembly3.png"),
        altText: "Assembly",
        caption: "",
        key: "key-3",
    },
];

function MechaEXCarousel() {
    const [mintingEnabled, setMintingEnabled] = useState(true)

    const [mintingCount, setMintingCount] = useState('1')
    const [warningMessage, setWarningMessage] = useState('')
    const [portalGunLabel, setPortalGunLabel] = useState('Portal Gun')

    const {getContract} = useContract()
    const {getBalance} = useBalance()
    const [network] = useAtom(networkAtom)
    const [contract, setContract] = useState(null)
    const [price, setPrice] = useState("")
    const [walletProvider] = useAtom(walletProviderAtom)
    const [connected] = useAtom(connectedAtom)
    const [fetched, setFetched] = useState(false)
    const [statusMessage, setStatusMessage] = useState({visible: false, message: ``, variant: `info`})

    useEffect(() => {
        const fetch = async () => {
            try {
                const networkAddress = '0xEc5315BF502f53EdE13eefAB50C2475Dd2a6D583'
                if (networkAddress) {
                    let contract = getContract('0xEc5315BF502f53EdE13eefAB50C2475Dd2a6D583', mechagnomes.abi)
                    setContract(contract)

                    let response = await contract.currentMintCost();
                    setPrice(ethers.utils.formatEther(response))
                }

                setFetched(true)
            } catch (e) {
                console.log("failed to load contract", e)
                setFetched(false)
            }
        }

        if (connected && !fetched) {
            fetch()
        }
    }, [connected])

    function handleChange(event) {
        const newValue = event.target.value;

        //for debugging the message
        //setStatusMessage({visible: true, message: newValue, variant: "danger"})

        if (newValue > 10) {
            setWarningMessage("Number must be less then 11");
            return;
        }
        if (newValue === 1)
            setPortalGunLabel("Portal Gun")
        else
            setPortalGunLabel("Portal Gun's")

        setMintingCount(event.target.value);
    }

    const mint = async () => {
        if (!mintingCount || +mintingCount === 0) {
            setStatusMessage({message: "You must specify an amount", visible: true, variant: "info"})
            return
        }

        if (!mintingCount || +mintingCount > 10 || +mintingCount <= 0) {
            setStatusMessage({
                message: "Mint amount cannot exceed " + 10 + " per transaction.",
                visible: true,
                variant: "info"
            })
            return
        } else {

            setStatusMessage({visible: false, message: "", variant: "info"})
        }

        try {
            const balance = await getBalance()
            const address = await walletProvider.getSigner().getAddress()
            const gasPrice = await walletProvider.getGasPrice()

            const buyPrice = (+price * +mintingCount)

            if (balance < buyPrice) {
                setStatusMessage({message: `Insufficient funds.`, visible: true, variant: "danger"})
                return
            }

            await contract.mintPublicSale(+mintingCount,
                {
                    from: address,
                    // to: contract.address,
                    gasPrice: gasPrice,
                    value: ethers.utils.parseEther(buyPrice.toString()).toString()
                }
            ).then((tx) => {
                setMintingCount(10)
                //nick
                setStatusMessage({message: `Transaction pending.`, visible: true, variant: "info"})

                return tx.wait().then(() => {
                    // This is entered if the transaction receipt indicates success
                    //nick
                    setStatusMessage({
                        message: `Transaction successfully processed!`,
                        visible: true,
                        variant: "success"
                    })
                    return true;
                }, (error) => {
                    // This is entered if the status of the receipt is failure
                    return error.checkCall().then(() => {
                        //nick
                        setStatusMessage({message: `Transaction failed!`, visible: true, variant: "danger"})
                        return false;
                    });
                })
            });
        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        if (statusMessage.visible) {
            const timeout = setTimeout(() => setStatusMessage({visible: false, message:  "", variant: "info"}), 5000000);

            return () => {
                clearTimeout(timeout);
            };
        }

    }, [statusMessage]);



    useEffect(() => {
        if (statusMessage.visible) {
            const timeout = setTimeout(() => setStatusMessage({visible: false, message:  "", variant: "info"}), 5000000);

            return () => {
                clearTimeout(timeout);
            };
        }

    }, [statusMessage]);

    return (
        <>
            {statusMessage.visible &&
                <Toast className={"bg-" + statusMessage.variant + " toast-stick"}>
                    <div className="toast-header text-white">
                        <img
                            alt="..."
                            className="rounded mr-2"
                            src={gear30x30}
                        ></img>
                        <strong className="mr-auto" style={{padding: "6px"}}>
                            {
                                statusMessage.variant === 'danger'
                                    ? "An error has occured"
                                    : "Request processed"
                            }
                        </strong>
                        <button
                            type="button"
                            className="ml-2 close"
                            data-dismiss="toast"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <ToastBody className="text-white">
                        {statusMessage.message}
                    </ToastBody>
                </Toast>

            }
            <div
                className="section bg-mechabrown buildAMechaSection"
            >
                <Container className="py-md">
                    <Row className="justify-content-between align-items-center">
                        <Col className="mb-5 mb-lg-0 buildAMechaCol" lg="6" sm="12" md="12">
                            <h1 className="font-weight-light header-white">Claim a Portal Gun</h1>
                            <p className="lead mt-4">
                                Claiming a Portal Gun through our exclusive whitelist will grant you your all access
                                path to Outback Martians.<br/>
                                You will be able to claim 5 guns per whitelisted address. Period.<br/>
                                Once all guns are claimed there will not be anymore distributed.<br/>
                            </p>


                            {
                                !mintingEnabled ?

                                    <Button
                                        className="btn-white mt-4"
                                        color="default"
                                    >
                                        COMING SOON ⚙️
                                    </Button>

                                    :
                                    <>
                                        {warningMessage.length > 0 &&
                                            <Alert color="default">
                                                <strong>Warning!</strong> {warningMessage}
                                            </Alert>

                                        }
                                        <Button
                                            className="btn-white mt-4"
                                            color="default"
                                            style={{minWidth: "20em", padding: "0"}}
                                        >
                                            Claim
                                            <Input
                                                className=" "
                                                id="count"
                                                type="number"
                                                value={mintingCount}
                                                onChange={handleChange}
                                                style={{
                                                    maxWidth: "5em",
                                                    display: "revert",
                                                    marginLeft: "1em",
                                                    marginRight: "1em"
                                                }}

                                            ></Input>
                                            {portalGunLabel}
                                        </Button>

                                        <Button
                                            className="btn-white mt-4"
                                            color="default"
                                            style={{padding: "0 5px 0 5px"}}
                                            onClick={mint}
                                        >
                                            Claim ➥
                                        </Button>
                                    </>

                            }

                        </Col>
                        <Col className="mb-lg-auto order-xl-first" lg="5" sm="12" md="12">
                            <div className="rounded overflow-hidden transform-perspective-left">
                                <UncontrolledCarousel items={items}/>
                            </div>
                            <p>
                                <br/>
                                The images above are representations of the official OM mint, this Portal Gun will help
                                grant access to obtaining these Martians.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default MechaEXCarousel;
