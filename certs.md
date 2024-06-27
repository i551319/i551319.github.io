---
layout: inventory
title: Certificates Inventory
---

<h2>Certificates</h2>
<table  id="certs-table">
  <thead>
    <tr>
      <th>Certificate Name</th>
      <th>Certificate Type</th>
      <th>Issuer</th>
      <th>Expiration Date</th>
      <th>Associated Domains/Services</th>
      <th>Installation Procedure</th>
      <th>Renewal Procedure</th>
      <th>Dependencies/Impact of Expiration</th>
      <th>Ownership/Responsible Teams</th>
    </tr>
  </thead>
  <tbody>
    {% for cert in site.data.Certificates %}
    <tr>
      <td>{{ cert["Certificate Name"] }}</td>
      <td>{{ cert["Certificate Type"] }}</td>
      <td>{{ cert.Issuer }}</td>
      <td>{{ cert["Expiration Date"] }}</td>
      <td>{{ cert["Associated Domains/Services"] }}</td>
      <td>{{ cert["Installation Procedure"] }}</td>
       <td>
        {% if cert["Renewal Procedure"] %}
          <a href="{{ cert["Renewal Procedure"] }}" target="_blank">Link to Renewal Procedure</a>
        {% else %}
          N/A
        {% endif %}
      </td>
      <td>{{ cert["Dependencies/Impact of Expiration"] }}</td>
      <td>{{ cert["Ownership/Responsible Teams"] }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
