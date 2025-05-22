@app.route('/opportunities')
@login_required
def opportunities():
    if current_user.role != 'student':
        return redirect(url_for('dashboard'))

    cur = mysql.connection.cursor()
    
    # Fetch all active opportunities
    cur.execute("""
        SELECT id, title, type, description, deadline, status, google_form_link
        FROM opportunities 
        WHERE status='active'
        ORDER BY deadline ASC
    """)
    opportunities = [
        {
            'id': row[0],
            'title': row[1],
            'type': row[2],
            'description': row[3],
            'deadline': row[4],
            'status': row[5],
            'google_form_link': row[6]
        }
        for row in cur.fetchall()
    ]
    
    # Get application stats
    cur.execute("SELECT COUNT(*) FROM applications WHERE student_id = %s", (current_user.id,))
    applications_count = cur.fetchone()[0]
    
    cur.execute("""
        SELECT COUNT(*) FROM opportunities 
        WHERE status='active' 
        AND deadline BETWEEN NOW() AND DATE_ADD(NOW(), INTERVAL 3 DAY)
    """)
    approaching_deadlines = cur.fetchone()[0]
    
    # --- NEW: Fetch opportunities already applied by the student ---
    cur.execute("""
        SELECT opportunity_id FROM applications 
        WHERE student_id = %s
    """, (current_user.id,))
    applied_rows = cur.fetchall()
    applied_opportunity_ids = {row[0] for row in applied_rows}  # set of opportunity IDs
    
    cur.close()
    
    return render_template('opportunities.html',
                           opportunities=opportunities,
                           applications_count=applications_count,
                           approaching_deadlines=approaching_deadlines,
                           applied_opportunity_ids=applied_opportunity_ids)