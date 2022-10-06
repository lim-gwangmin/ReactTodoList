import React from 'react';
import styled, { css } from 'styled-component';

const TodoDeleteBtn = styled.button`
	display: none;
	position: absolute;
	top: 0;
	right: 10px;
	bottom: 0;
	width: 40px;
	height: 40px;
	margin: auto 0;
	font-size: 30px;
	color: #cc9a9a;
	margin-bottom: 11px;
	transition: color 0.2s ease-out;
   &:hover {
      color: #af5b5e;
   }
   &:after {
      content: '×';
   }
`;