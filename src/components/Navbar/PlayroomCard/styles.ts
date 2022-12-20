import styled from 'styled-components'

import { colors } from '../../../theme/colors'

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  width: 100%;
  height: 100%;

  grid-row-end: 9;
  grid-row-start: 1;
  grid-column-end: 6;
  grid-column-start: 3;

  overflow: hidden;

  border-radius: 8px;
  background-color: ${colors.$darkSlateGray2};
`
export const Round = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 200px;

  top: 90%;
  left: 90%;

  border-radius: 50%;
  transform: translateY(-50%) translateX(-50%);

  background-color: ${colors.$maximumBlueGreen};
`

export const ArrowRight = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translateY(-50%) translateX(-40%);

  width: 0;
  height: 0;

  border-top: 100px solid transparent;
  border-bottom: 100px solid transparent;

  border-radius: 0.8rem;

  border-left: 140px solid ${colors.$maximumBlueGreen};
`

export const FigureTheerd = styled.div`
  position: absolute;

  width: 200px;
  height: 200px;
  background-color: ${colors.$maximumBlueGreen};
  border-radius: 1.2rem;

  bottom: -60px;
  left: 0px;

  transform: rotate(45deg);
`

export const FigureFourt = styled.div`
  position: absolute;
  top: 60px;
  right: 60px;

  width: 54px;
  box-sizing: content-box;
  border-width: 50px 18px 0;
  border-style: solid;
  border-color: red transparent;

  /* transform: rotate(12deg); */

  &::before {
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    top: -85px;
    left: -18px;
    border-width: 0 45px 35px;
    border-style: solid;
    border-color: transparent transparent red;
  }
`

export const Columns = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  gap: 1rem;

  border-radius: 1.2rem;

  height: 100px;
`

export const Column = styled.div`
  width: 10px;

  background-color: ${colors.$maximumBlueGreen};
  &:nth-child(1) {
    height: 20%;
  }
  &:nth-child(2) {
    height: 40%;
  }
  &:nth-child(3) {
    height: 60%;
  }
  &:nth-child(4) {
    height: 80%;
  }
  &:nth-child(5) {
    height: 100%;
  }
`
// export const FigureEighth = styled.div`
//   position: absolute;

//   width: 20px;
//   height: 50px;
//   background-color: red;

//   bottom: 50px;
//   left: 120px;
// `
// export const FigureFives = styled.div`
//   position: absolute;

//   width: 20px;
//   height: 50px;
//   background-color: bisque;

//   bottom: 20px;
//   left: 20px;
// `

// export const Triangle = styled.div``
// export const ArrowDown = styled.div`
//   width: 0;
//   height: 0;
//   border-left: 20px solid transparent;
//   border-right: 20px solid transparent;

//   border-top: 20px solid #f00;
// `
// export const ArrowLeft = styled.div`
//   width: 0;
//   height: 0;
//   border-top: 10px solid transparent;
//   border-bottom: 10px solid transparent;

//   border-right: 10px solid blue;
// `

// export const ArrowUp = styled.div`
//   width: 0;
//   height: 0;
//   border-left: 5px solid transparent;
//   border-right: 5px solid transparent;

//   border-bottom: 5px solid black;
// `

export const FigureSecond = styled.div``
export const FigureSevent = styled.div``
export const FigureSixes = styled.div``
