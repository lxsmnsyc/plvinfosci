/**
 * @license
 * MIT License
 *
 * Copyright (c) 2019 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2019
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContentAnimation = {
  hide: {
    opacity: 0,
    scale: 0.75,
    x: '-50%',
    y: '-50%',
    transition: {
      duration: 0.4,
      when: 'afterChildren',
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: {
      duration: 0.4,
      when: 'beforeChildren',
    },
  },
};

const ContentBase = styled(motion.div)`
  position: fixed;
  top: 50vh;
  left: 50vw;

  height: 80vh;
  width: 90vw;

  transform: translate(-50%, -50%);

  box-shadow: 0px 20px 2vmax 0px #26323880;

  border-radius: 2vmax;	

  overflow: hidden;

  white-space: nowrap;
  z-index: 200;
`;

function Content({ initial, animate, children }) {
  return (
    <ContentBase variants={ContentAnimation} initial={initial} animate={animate}>
      { children }
    </ContentBase>
  );
}

Content.propTypes = {
  initial: PropTypes.string.isRequired,
  animate: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Content;