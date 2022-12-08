import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function ShowFooterLinks({ links, external }) {
    return (
        <>
            {links.map((link) => (
                <ul className="footer_ul">
                    <li className="footer_ul_li">
                        {external ? (
                            <>
                                <MdKeyboardArrowRight />
                                <a href={link.route} target="__black">
                                    {link.name}
                                </a>
                            </>
                        ) : (
                            <>
                                <MdKeyboardArrowRight />
                                <Link to={link.route}>{link.name}</Link>
                            </>
                        )}
                    </li>
                </ul>
            ))}
        </>
    );
}

export default ShowFooterLinks;
