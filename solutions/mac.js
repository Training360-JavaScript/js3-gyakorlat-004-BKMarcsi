const checkMac = (MACNumber) =>{
    return MACNumber.match(/^(([A-Fa-f0-9]{2}[:]){5}[A-Fa-f0-9]{2}[,]?)+$/) ? true:false;
}

export default checkMac;