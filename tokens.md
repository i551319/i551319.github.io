---
layout: inventory
title: Tokens Inventory
---

<h2>Tokens</h2>
<table  id="token-table">
  <thead>
    <tr>
      <th>Token Name</th>
      <th>Token Type</th>
      <th>Provider</th>
      <th>Location URL</th>
      <th>Scopes Requested</th>
      <th>Access Levels/Permissions</th>
      <th>Ownership/Responsible Teams</th>
      <th>Configuration Details</th>
      <th>Maintenance Procedures</th>
    </tr>
  </thead>
  <tbody>
    {% for token in site.data.Tokens %}
    <tr>
      <td>{{ token["Token Name"] }}</td>
      <td>{{ token["Token Type"] }}</td>
      <td>{{ token.Provider }}</td>
      <td>
        {% if token["Location URL"] %}
          <a href="{{ token["Location URL"] }}" target="_blank">Link to Passvault</a>
        {% else %}
          N/A
        {% endif %}
      </td>
      <td>{{ token["Scopes Requested"] }}</td>
      <td>{{ token["Access Levels/Permissions"] }}</td>
      <td>{{ token["Ownership/Responsible Teams"] }}</td>
      <td>{{ token["Configuration Details"] }}</td>
      <td>{{ token["Maintenance Procedures"] }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
