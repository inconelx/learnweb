<div id="intro">
    <div id="image">
        <div id="slider">
        <ul class="slides clearfix">
            <% imgs.forEach(function(img){ %>
                <li><img class="responsive" src="<%= img %>"></li>
            <% }) %>
        </ul>
        <ul class="controls">
            <li><img src="jq/img/prev.png" alt="previous"></li>
            <li><img src="jq/img/next.png" alt="next"></li>
        </ul>
        <ul class="pagination">
            <li class="active"></li>
            <li></li>
        </ul>
        </div>
    </div>
    <div id="info">
        <div class="pros"><div style="margin:auto">符号:</div><div id="info_0" style="margin:auto"><%= info_0 %></div></div>
        <div class="pros"><div style="margin:auto">名称:</div><div id="info_1" style="margin:auto"><%= info_1 %></div></div>
        <div class="pros"><div style="margin:auto">相对原子质量:</div><div id="info_2" style="margin:auto"><%= info_2 %></div></div>
        <div class="pros"><div style="margin:auto">熔点:</div><div id="info_3" style="margin:auto"><%= info_3 %></div></div>
        <div class="pros"><div style="margin:auto">沸点:</div><div id="info_4" style="margin:auto"><%= info_4 %></div></div>
        <div class="pros"><div style="margin:auto">分类:</div><div id="info_5" style="margin:auto"><%= info_5 %></div></div>
        <div class="pros"><div style="margin:auto">周期:</div><div id="info_6" style="margin:auto"><%= info_6 %></div></div>
        <div class="pros"><div style="margin:auto">族:</div><div id="info_7" style="margin:auto"><%= info_7 %></div></div>
        <div class="pros"><div style="margin:auto">价电子:</div><div id="info_8" style="margin:auto"><%= info_8_0 %><sup><%= info_8_1 %></sup><%= info_8_2 %><sup><%= info_8_3 %></sup><%= info_8_4 %><sup><%= info_8_5 %></sup></div></div>
    </div>
    <div id="brief">
        <% briefs.forEach(function(brief){ %>
            <div><%= brief %></div>
            <br>
        <% }) %>
    </div>
</div>