"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const EmbedPage = () => {
    const [embedLink, setEmbedLink] = useState(null);
    const [embeddedContent, setEmbeddedContent] = useState(null);
    const searchParams = useSearchParams();

    let url = "";

    useEffect(() => {
        // extract link from search params
        url = searchParams.get("link");
        setEmbedLink(url);
    }, [url]);

    return (
      <iframe id="result" src={embedLink} sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-downloads allow-presentation" allow="accelerometer; ambient-light-sensor; camera; display-capture; encrypted-media; geolocation; gyroscope; microphone; midi; payment; vr; web-share" allowtransparency="true" allowpaymentrequest="true" allowFullScreen={true} class="result-iframe" loading="lazy"></iframe>
    );
};

export default EmbedPage;
