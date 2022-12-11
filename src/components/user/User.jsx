import PropTypes from 'prop-types';
import { Title, Avatar, StatList, Tag, Location, Name, Item, Label } from 'components/user/User.styled';

export const User = ({user: {username, tag, location, avatar, stats: {followers, views, likes}
}}) => {
    return (
            <Title>
            <div>
                <Avatar src={avatar } alt={tag} />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
            </div>
        
            <StatList>
            <Item>
                <Label>Followers</Label>
                <span>
                {followers}
                </span>
            </Item>
            <Item>
                <Label>Views</Label>
                <span>
                {views}
                </span>
            </Item>
            <Item>
                <Label>Likes</Label>
                <span>
                {likes}
                </span>
            </Item>
            </StatList>
        </Title>
    )
};

    User.propTypes = {
        user: PropTypes.shape({
            username: PropTypes.string.isRequired,
            tag: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            stats: PropTypes.shape({
                followers: PropTypes.number.isRequired,
                views: PropTypes.number.isRequired,
                likes: PropTypes.number.isRequired,
            }),
        }),
    };

