import styled from "styled-components";

export const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

export const IframeHead = styled.div`
	position: relative;
	width: calc(100vw - 280px);
	height: 50px;
	padding: 17px calc(17px * 3) 17px 17px;
	overflow: hidden;
	white-space: nowrap;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	background-color: #fff;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
	box-sizing: border-box;
`;

export const IframeClose = styled.div`
	position: absolute;
	right: 17px;
	top: 17px;
	cursor: pointer;
`;

export const IframeContent = styled.iframe<{ src: any }>`
	flex: 1;
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
