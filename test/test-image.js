/*jshint esversion: 6 */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Image from '../js/components/image';

describe('Image component', function() {
    it('Renders the image and description',  function() {
        const url = "http://www.example.com/image.png";
        const description = "Example description";

        const renderer = TestUtils.createRenderer();
        renderer.render(<Image url={url} description={description} />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery-image');

        const img = result.props.children[0];
        img.type.should.equal('img');
        img.props.src.should.equal(url);
        img.props.alt.should.equal(description);

        const p = result.props.children[1];
        p.type.should.equal('p');
        p.props.children.should.equal(description);
    });
});

import Gallery from '../js/components/gallery';
describe('Gallery component', function() {
    it('Renders a gallery of images', function() {
        const images = [{url:'http://www.example.com/image.png', description:'Example description'},
            {url:'http://www.example.com/image2.png', description:'Example description2'}];
        const renderer = TestUtils.createRenderer();
        renderer.render(<Gallery images={images} />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery');

        const imgs = result.props.children;
        imgs.length.should.equal(2);

        console.log(imgs);
        const p = result.props.children[0];
        p.props.url.should.equal(images[0].url);
        p.props.description.should.equal(images[0].description);

        const two = result.props.children[1];
        two.props.url.should.equal(images[1].url);
        two.props.description.should.equal(images[1].description);
    });
});
// Try creating a series of tests to make
// sure that the Gallery component is working
// correctly.
// You should check that the
// container has the correct class name,
// that the correct number of Images are rendered,
// and that each Image has the correct props set.
//
//
//
