---
layout: inventory
title: How Used
---

<h2>Authentication Methods - How Used</h2>
<table  id="where-used-table">
  <thead>
    <tr>
      <th>Authentication Method</th>
      <th>Type</th>
      <th>Typical Usage Scenarios</th>
      <th>User Interactions</th>
      <th>Automated Processes and Scripts</th>
      <th>Logs and Monitoring Details</th>
    </tr>
  </thead>
  <tbody>
    {% for item in site.data.How_used %}
    <tr>
      <td>{{ item["Authentication Method"] }}</td>
      <td>{{ item["Type"] }}</td>
      <td>{{ item["Typical Usage Scenarios"] }}</td>
      <td>{{ item["User Interactions"] }}</td>
      <td>{{ item["Automated Processes and Scripts"] }}</td>
      <td>{{ item["Logs and Monitoring Details"] }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
