<% ix=0; count=deep.definitions.length %>
{"res":[<% deep.definitions.forEach(function(definition, ix){ %>{
		'name':'<%= definition.name -%>',
		'extends': '<% if (definition.extends) { %><%= definition.extends.name -%>) %><% } %>',
		'constructor':'<% if (definition.construct) { %><%= definition.construct.name -%><% } %>',
		'arguments':[<% if (definition.parms.length > 0) { i=0; %><% definition.parms.forEach(function(parm){ %>
				{'<%= parm.name -%>': '<%= parm.type -%>'}
				<% if(i+1<definition.parms.length){ %>,<% } %>
				<% i=i+1;%>
			<% }) %><% } %>],
		'methods':[<% if (definition.methods.length > 0) { c=0; %>
			<% definition.methods.forEach(function(method){ %>
				{'<%= method.name -%>':[<% if (method.parms.length > 0) { z=0; %>
					<% method.parms.forEach(function(parm){ %>
						{'<%= parm.name -%>':'<%= parm.type -%>'}<% if(z+1<definition.parms.length){ %>,<% } %>
						<% z=z+1; %>
					<% }) %>
					<% } %>]}<% if (c+1<definition.methods.length){ %>,<% } %>
			<% }) %>
			<% } %>]
}<% if(ix+1 < count){ %>,<% } %>
		<% ix=ix+1;%><% }) %>]}