---
layout: inventory
title: Maintenance Procedures
---

<h2>Maintenance Procedures</h2>
<table  id="maintenance-table">
  <thead>
    <tr>
      <th>Authentication Method</th>
      <th>Type</th>
      <th>Routine Maintenance Tasks</th>
      <th>Incident Response Steps</th>
      <th>Update and Patch Management</th>
      <th>Change Management Processes</th>
    </tr>
  </thead>
  <tbody>
    {% for item in site.data.Maintenance %}
    <tr>
      <td>{{ item["Authentication Method"] }}</td>
      <td>{{ item["Type"] }}</td>
      <td>{{ item["Routine Maintenance Tasks"] }}</td>
      <td>{{ item["Incident Response Steps"] }}</td>
      <td>{{ item["Update and Patch Management"] }}</td>
      <td>{{ item["Change Management Processes"] }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
