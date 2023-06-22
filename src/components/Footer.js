import QRLink from "./QRLink";
import WebLinks from "./WebLinks";
import styles from "./Footer.module.scss";

const Footer = ({data}) => {
    const origin = 'https://idish.app';
    const link = `${origin}/?id=${data?.companyId}`;
    const image = data?.bannerImage;
    const bgUrl = image ? require(`../assets/banners/${image}`) : "";

    return (
        <div className={styles.container}>
            <div className={styles.background} style={{backgroundImage: `url(${bgUrl})`}}></div>
            <WebLinks link={link} />
            <QRLink link={link}/>
        </div>
    )
};

export default Footer;
