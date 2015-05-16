<% ix=0; %>
[<% deep.definitions.forEach(function(definition, ix){ %>{
	"<%= definition.name -%>":{
		"extends": "<% if (definition.extends) { %><%= definition.extends.name -%>)<% } %>",
		"constructor":"<% if (definition.construct) { %><%= definition.construct.name -%><% } %>",
		"arguments":[<% if (definition.parms.length > 0) { i=0; %><% definition.parms.forEach(function(parm){ %>{"<%= parm.name -%>": "<%= parm.type -%>"}<% if(i<definition.parms.length){ %>,<% } %>*********<%= i %>******<% i=i+1;%><% }) %><% } %>],
		"methods":[<% if (definition.methods.length > 0) { %><% definition.methods.forEach(function(method){ %>"<%= method.name -%>":[]<% if (method.parms.length > 0) { %><% method.parms.forEach(function(parm, i){ %>{"<%= parm.name -%>":"<%= parm.type -%>"}<% if(i<definition.parms.length){ %>,<% } %><% }) %><% } %>)<% }) %><% } %>]	
	}
}<% if(ix < deep.definitions.length){ %>,<%}%>
<% ix=ix+1;%>
<% }) %>]




