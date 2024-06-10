import {BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles.jsx';
import Home from '../../routes/home/home.component';

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;

    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
        <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
        </Body>
        </DirectoryItemContainer>
    );
    };

export default DirectoryItem;