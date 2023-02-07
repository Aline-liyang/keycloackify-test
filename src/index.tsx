import React from 'react';
import { createRoot } from "react-dom/client";
import KcApp, { defaultKcProps, getKcContext } from "keycloakify";
import { kcContext } from "./KcApp/kcContext";

//We assume the file contains: ".my-class { color: red; }"
//import "./index.css";

// const { kcContext } = getKcContext();

if( kcContext === undefined ){
    throw new Error(
        "This app is a Keycloak theme" +
        "It isn't meant to be deployed outside of Keycloak"
    );
}

createRoot(document.getElementById("root")!).render(
    <KcApp
        kcContext={kcContext}
        {...{
            ...defaultKcProps,
            kcHeaderWrapperClass: "my-class",
        }}
    />
);