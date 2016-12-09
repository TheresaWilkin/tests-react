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
    });
});
// Try creating a series of tests to make 
// sure that the Gallery component is working 
// correctly. You should check that the 
// container has the correct class name, that 
// the correct number of Images are rendered, 
// and that each Image has the correct props set.
// 
// 
// 