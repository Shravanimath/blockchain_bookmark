// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Bookmark {
    struct Link {
        string title;
        string url;
    }

    Link[] public bookmarks;

    event BookmarkAdded(string title, string url);

    function addBookmark(string memory _title, string memory _url) public {
        bookmarks.push(Link(_title, _url));
        emit BookmarkAdded(_title, _url);
    }

    function getBookmarks() public view returns (Link[] memory) {
        return bookmarks;
    }

   
}
