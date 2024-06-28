---
layout: inventory
title: Users Inventory
---

<h2>Users</h2>
<table  id="technical-users-table">
  <thead>
    <tr>
      <th>Username/Identifier</th>
      <th>Role/Purpose</th>
      <th>Location URL</th>
      <th>Associated Systems/Applications</th>
      <th>Access Levels/Permissions</th>
      <th>Ownership/Responsible Teams</th>
      
    </tr>
  </thead>
  <tbody>
    {% for user in site.data.Technical_Users %}
    <tr>
      <td>{{ user["Username/Identifier"] }}</td>
      <td>{{ user["Role/Purpose"] }}</td>
      <td>{{ user["Associated Systems/Applications"] }}</td>
      <td>
        {% if user["Location URL"] %}
          <a href="{{ user["Location URL"] }}" target="_blank">Link to Passvault</a>
        {% else %}
          N/A
        {% endif %}
      </td>
      <td>{{ user["Access Levels/Permissions"] }}</td>
      <td>{{ user["Ownership/Responsible Teams"] }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
