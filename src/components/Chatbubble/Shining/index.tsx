import React from 'react';
import { BgChatBubbleShining } from '../../../assets';
import { StChatbubbleShining } from './style';

function ChatbubbleShining(props: { text: string }) {
  return (
    <StChatbubbleShining>
      <BgChatBubbleShining />
      <div>{props.text}</div>
    </StChatbubbleShining>
  );
}

export default ChatbubbleShining;
