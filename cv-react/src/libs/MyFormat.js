import React from "react";

class MyFormat extends React.Component {
    getPhoneNumber = (num) => {
        let phoneNumber =
            num.slice(0, 3) +
            " " +
            num.slice(3, 6) +
            " " +
            num.slice(6, 9) +
            " " +
            num.slice(9, 12);
        return phoneNumber;
    };

    // getDateTime = (data) => {
    //     let date = new Date(data);
    //     return (date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()).toString();
    // }

    // getNewDateTime = () => {
    //     let date = new Date();
    //     return (date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()).toString();
    // }

    // getNewDate = () => {
    //     let date = new Date();
    //     return (date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()).toString();
    // }

    // getCardNumber = (cardNum) => {
    //     let cardNumber = cardNum.slice(0, 4) + " " + cardNum.slice(4, 8) + " " + cardNum.slice(8, 12) + " " + cardNum.slice(12, 16);
    //     return cardNumber;
    // }
}

export default new MyFormat();
