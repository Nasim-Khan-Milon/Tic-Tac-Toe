import { useState } from "react";
import Square from "./Square";

export default function Board(){


    return(
        <>
            <div>
                <Square/>
                <Square/>
                <Square/>
            </div>

            <div>
                <Square/>
                <Square/>
                <Square/>
            </div>

            <div>
                <Square/>
                <Square/>
                <Square/>
            </div>
        </>
    )
}