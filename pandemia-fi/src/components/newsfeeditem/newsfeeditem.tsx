import React from "react";
import {Link, Box, Text, Heading} from 'rebass';

interface NewsFeedItemProps {
  date: Date;
  url: string;
  title: string;
  additionalInfo: string;
}

const NewsFeedItem: React.FunctionComponent<NewsFeedItemProps> = ({
  children,
  date,
  url,
  title,
  additionalInfo,
}) => {
  return (

    <Link href={url}>
      <Box py={3}>
        <Heading fontSize={[ 2,2,2 ]}> {title}</Heading>
        <Text fontSize={[ 1,1,2 ]} color='gray'>{additionalInfo}</Text>
        <Text fontSize={[ 1,1,2 ]} color='gray'>{date.toString()}</Text>
        {children}
      </Box>
    </Link>
  )
};

export default NewsFeedItem;
