import React from "react";
import renderer from "react-test-renderer"
import Link from "./Link.jsx";

it('renders correctly ', function () {
    const tree = renderer
        .create(<Link page="http://www.facebook.com">Facebook</Link>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders as an anchor when no page is set', () => {
    const tree = renderer.create(<Link>Facebook</Link>).toJSON();
    expect(tree).toMatchSnapshot();
});

test("link changes the class when hovered", () => {
    const component = renderer.create(
        <Link page="https://skillfactory.ru/">Skill factory</Link>
    );
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    renderer.act(() => {
        tree.props.onMouseEnter();
    })
    // re-rendering
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    // manually trigger the callback
    renderer.act(() => {
        tree.props.onMouseLeave();
    })
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});