/*
Credits: this script is shamelessly borrowed from
https://github.com/kitian616/jekyll-TeXt-theme
*/
$(document).ready(function() {
    var $tagCloud = document.getElementById('tag_cloud');
    var $categoryCloud = document.getElementById('category_cloud');
    var $articleList = document.querySelector('.mini-post-list');
    var $result = document.querySelector('.js-result');

    // 初始化标签和分类按钮
    function initButtons(container, type) {
        if (!container) return;
        
        var buttons = container.getElementsByTagName('a');
        Array.prototype.forEach.call(buttons, function(button) {
            button.style.backgroundColor = "#f8f9fa";
            button.style.color = "#8839ef";
            button.onmouseover = function() {
                this.style.backgroundColor = "#8839ef";
                this.style.color = "#f8f9fa";
            };
            button.onmouseout = function() {
                this.style.backgroundColor = "#f8f9fa";
                this.style.color = "#8839ef";
            };
        });
    }

    // 过滤文章
    function filterPosts(type, encode) {
        var articles = $result.getElementsByClassName('item');
        
        if (encode === '') {
            // Show All
            Array.prototype.forEach.call(articles, function(article) {
                article.style.display = 'block';
            });
        } else {
            Array.prototype.forEach.call(articles, function(article) {
                var dataAttr = type === 'tag' ? article.getAttribute('data-tags') : article.getAttribute('data-category');
                if (dataAttr && dataAttr.indexOf(encode) !== -1) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        }
    }

    // 初始化
    initButtons($tagCloud, 'tag');
    initButtons($categoryCloud, 'category');

    // 标签点击事件
    if ($tagCloud) {
        var tagButtons = $tagCloud.getElementsByTagName('a');
        Array.prototype.forEach.call(tagButtons, function(button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                var encode = this.getAttribute('data-encode') || '';
                filterPosts('tag', encode);
            });
        });
    }

    // 分类点击事件
    if ($categoryCloud) {
        var categoryButtons = $categoryCloud.getElementsByTagName('a');
        Array.prototype.forEach.call(categoryButtons, function(button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                var encode = this.getAttribute('data-encode') || '';
                filterPosts('category', encode);
            });
        });
    }
});
